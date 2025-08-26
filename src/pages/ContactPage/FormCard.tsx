import CardCustom from '@/components/CardCustom'
import { toaster } from '@/components/ui/toaster'
import { Button, Field, Fieldset, Input, Stack, Textarea } from '@chakra-ui/react'
import { useForm } from '@formspree/react'
import { useEffect } from 'react'

const FORM_SPREE = import.meta.env.VITE_APP_FORM_SPREE

export const FormCard = () => {
  const [state, handleSubmit] = useForm(FORM_SPREE)

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e)
  }

  useEffect(() => {
    if (state.succeeded) {
      queueMicrotask(() =>
        toaster.create({
          description: 'Email submitted',
          type: 'success',
        })
      )
    }

    if (state.errors) {
      queueMicrotask(() =>
        toaster.create({
          description: 'Not submitted',
          type: 'error',
        })
      )
    }
  }, [state.succeeded, state.errors])

  return (
    <CardCustom cardTitle="Contact details" as="section">
      <Fieldset.Root>
        <Fieldset.HelperText>Please provide your contact details below.</Fieldset.HelperText>
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <Stack>
            <Fieldset.Content>
              <Field.Root>
                <Field.Label>Email address</Field.Label>
                <Input name="email" type="email" />
              </Field.Root>

              <Field.Root>
                <Field.Label>Subject</Field.Label>
                <Input name="subject" />
              </Field.Root>

              <Field.Root>
                <Field.Label>Message</Field.Label>
                <Textarea name="message" rows={4} />
              </Field.Root>
            </Fieldset.Content>

            <Button type="submit" alignSelf="flex-end" loading={state.submitting}>
              Submit
            </Button>
          </Stack>
        </form>
      </Fieldset.Root>
    </CardCustom>
  )
}
