import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './contact'

vi.mock('react-awesome-reveal', () => ({
  Fade: ({ children }: { children: React.ReactNode }) => <>{children}</>,
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
  let alertMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    alertMock = vi.fn()
    vi.stubGlobal('alert', alertMock)
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('success branch: alerts "Message Sent." and resets form fields', async () => {
    vi.mocked(fetch).mockReturnValue(makeFetchResponse({ success: true }))
    render(<Contact />)

    await fillAndSubmit()

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith('Message Sent.')
    })
    expect(screen.getByLabelText(/name/i)).toHaveValue('')
    expect(screen.getByLabelText(/email/i)).toHaveValue('')
    expect(screen.getByLabelText(/message/i)).toHaveValue('')
  })

  it('server-fail branch: alerts failure message when success is false', async () => {
    vi.mocked(fetch).mockReturnValue(makeFetchResponse({ success: false }))
    render(<Contact />)

    await fillAndSubmit()

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith('Message failed to send.')
    })
  })

  it('network-catch branch: alerts failure message when fetch rejects', async () => {
    vi.mocked(fetch).mockRejectedValue(new Error('Network error'))
    render(<Contact />)

    await fillAndSubmit()

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringContaining('Message failed to send')
      )
    })
  })
})
