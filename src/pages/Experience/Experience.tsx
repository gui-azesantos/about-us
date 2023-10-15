import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

export function Experience() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack
        spacing={4}
        p={4}
        bgColor="red.500"
        borderRadius="lg"
        shadow="lg"
        align="start"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">Experiências</h2>

        <Controller
          name="jobTitle"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <FormLabel>Cargo</FormLabel>
              <Input {...field} placeholder="Seu cargo" />
            </FormControl>
          )}
        />

        <Controller
          name="company"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <FormLabel>Empresa</FormLabel>
              <Input {...field} placeholder="Nome da empresa" />
            </FormControl>
          )}
        />

        <Controller
          name="startDate"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <FormLabel>Data de Início</FormLabel>
              <Input {...field} placeholder="Data de início" />
            </FormControl>
          )}
        />

        <Controller
          name="endDate"
          control={control}
          defaultValue=""
          render={({ field }) =>  (
            <FormControl>
              <FormLabel>Data de Término (opcional)</FormLabel>
              <Input {...field} placeholder="Data de término (opcional)" />
            </FormControl>
          )}
        />

        <Button type="submit" colorScheme="red">
          Enviar
        </Button>
      </VStack>
    </form>
  );
}
