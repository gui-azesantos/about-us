import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

export function Education() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack
        spacing={4}
        p={4}
        bgColor="blue.500"
        borderRadius="lg"
        shadow="lg"
        align="start"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">Formação</h2>

        <Controller
          name="educationLevel"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <FormLabel>Nível de Educação</FormLabel>
              <Select {...field}>
                <option value="Ensino Médio">Ensino Médio</option>
                <option value="Graduação">Graduação</option>
                <option value="Pós-Graduação">Pós-Graduação</option>
                <option value="Outro">Outro</option>
              </Select>
            </FormControl>
          )}
        />

        <Controller
          name="institution"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <FormLabel>Instituição de Ensino</FormLabel>
              <Input {...field} placeholder="Nome da instituição" />
            </FormControl>
          )}
        />

        <Controller
          name="fieldOfStudy"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <FormLabel>Área de Estudo</FormLabel>
              <Input {...field} placeholder="Sua área de estudo" />
            </FormControl>
          )}
        />

        <Controller
          name="graduationYear"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <FormLabel>Ano de Conclusão</FormLabel>
              <Input {...field} placeholder="Ano de conclusão" />
            </FormControl>
          )}
        />

        <Button type="submit" mt="16" colorScheme="blue">
          Enviar
        </Button>
      </VStack>
    </form>
  );
}
