import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
} from '@chakra-ui/react';

export function Hobbies() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack
        spacing={4}
        p={4}
        bgColor="green.500"
        borderRadius="lg"
        shadow="lg"
        align="start"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">Hobbies</h2>

        <Controller
          name="mainHobby"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <FormLabel>Hobby Principal</FormLabel>
              <Input {...field} placeholder="Seu hobby principal" />
            </FormControl>
          )}
        />

        <Controller
          name="otherHobbies"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <FormLabel>Outros Hobbies</FormLabel>
              <Textarea {...field} placeholder="Liste seus outros hobbies aqui" />
            </FormControl>
          )}
        />

        <Button type="submit" mt="16" colorScheme="green">
          Enviar
        </Button>
      </VStack>
    </form>
  );
}


