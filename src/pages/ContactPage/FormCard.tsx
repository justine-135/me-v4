import CardCustom from '@/components/CardCustom'
import { Button, Field, Fieldset, Input, Stack, Textarea } from '@chakra-ui/react'

export const FormCard = () => {
  return (
    <CardCustom cardTitle="Contact details">
      <Fieldset.Root>
        <Stack>
          <Fieldset.HelperText>Please provide your contact details below.</Fieldset.HelperText>
        </Stack>
        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input name="name" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Email address</Field.Label>
            <Input name="email" type="email" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Body</Field.Label>
            <Textarea rows={4} />
          </Field.Root>
        </Fieldset.Content>

        <Button type="submit" alignSelf="flex-end">
          Submit
        </Button>
      </Fieldset.Root>
    </CardCustom>
  )
}
