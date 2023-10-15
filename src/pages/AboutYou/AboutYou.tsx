import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import axios, { AxiosResponse } from "axios";

interface AddressInfo {
  logradouro: string;
  bairro: string;
  localidade: string;
  
}

export function AboutYou() {
  const { control, handleSubmit, setValue, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [addressInfo, setAddressInfo] = useState<AddressInfo | null>(null);

  const fetchAddressInfo: any = async (cep: string) => {
    try {
      const response: AxiosResponse<AddressInfo> = await axios.get(
        `https://viacep.com.br/ws/${cep}/json/`
      );
      const { data } = response;
      setAddressInfo(data);
      // Preencha automaticamente os campos com os dados do endereço
      setValue("address", data.logradouro);
    } catch (error) {
      setAddressInfo(null);
      console.error("Erro ao buscar o endereço: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack
        spacing={4}
        p={4}
        bgColor="teal.500"
        borderRadius="lg"
        shadow="lg"
        align="start"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">Sobre Você</h2>

        <Controller
          name="fullName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <FormLabel>Nome Completo</FormLabel>
              <Input {...field} placeholder="Seu nome completo" />
            </FormControl>
          )}
        />

        <Controller
          name="birthDate"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <FormLabel>Data de Nascimento</FormLabel>
              <Input {...field} type="date" />
            </FormControl>
          )}
        />

        <Controller
          name="gender"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <FormLabel>Gênero</FormLabel>
              <Input {...field} placeholder="Seu gênero" />
            </FormControl>
          )}
        />

        <Controller
          name="nationality"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <FormLabel>Nacionalidade</FormLabel>
              <Input {...field} placeholder="Sua nacionalidade" />
            </FormControl>
          )}
        />

        <Controller
          name="address"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <FormLabel>Endereço</FormLabel>
              {!addressInfo && (
                <>
                  <Input
                    {...field}
                    placeholder="Digite seu CEP"
                    onBlur={(e) => fetchAddressInfo(e.target.value)}
                  />
                </>
              )}

              {addressInfo && (
                <>
                  <Input
                    value={addressInfo.logradouro}
                    placeholder="Logradouro"
                    mt={4}
                    disabled
                  />
                  <Input
                    value={addressInfo.bairro}
                    placeholder="Bairro"
                    mt={4}
                    disabled
                  />
                  <Input
                    value={addressInfo.localidade}
                    placeholder="Bairro"
                    mt={4}
                    disabled
                  />
                </>
              )}
            </FormControl>
          )}
        />

        <Flex mt={8}>

        <Button type="reset" onClick={()=> reset()} colorScheme="teal" mr={8}>
          Limpar
        </Button>

        <Button type="submit" colorScheme="teal" >
          Enviar
        </Button>
        </Flex>
        
      </VStack>
    </form>
  );
}
