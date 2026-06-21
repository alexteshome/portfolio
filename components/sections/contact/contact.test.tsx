import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './contact'

vi.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: () => undefined, inView: true }),
}))

function makeFetchResponse(body: object) {
  return Promise.resolve({
    json: () => Promise.resolve(body),
  } as Response)
}

async function fillAndSubmit() {
  await userEvent.type(screen.getByLabelText(/name/i), 'Alex')
  await userEvent.type(screen.getByLabelText(/email/i), 'alex@example.com')
  await userEvent.type(screen.getByLabelText(/message/i), 'Hello!')
  await userEvent.click(screen.getByRole('button', { name: /submit/i }))
}

describe('Contact handleSubmit', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('success branch: shows "Message Sent." and resets form fields', async () => {
    vi.mocked(fetch).mockReturnValue(makeFetchResponse({ success: true }))
    render(<Contact />)

    await fillAndSubmit()

    expect(await screen.findByText('Message Sent.')).toBeTruthy()
    expect(screen.getByLabelText(/name/i)).toHaveValue('')
    expect(screen.getByLabelText(/email/i)).toHaveValue('')
    expect(screen.getByLabelText(/message/i)).toHaveValue('')
  })

  it('server-fail branch: shows failure message when success is false', async () => {
    vi.mocked(fetch).mockReturnValue(makeFetchResponse({ success: false }))
    render(<Contact />)

    await fillAndSubmit()

    await waitFor(() => {
      expect(screen.findByText('Message failed to send.')).toBeTruthy()
    })
  })

  it('network-catch branch: shows failure message when fetch rejects', async () => {
    vi.mocked(fetch).mockRejectedValue(new Error('Network error'))
    render(<Contact />)

    await fillAndSubmit()

    await waitFor(() => {
      expect(screen.findByText(/Message failed to send/)).toBeTruthy()
    })
  })
})
