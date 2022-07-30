import { useFormContext } from 'react-hook-form';
import { FormContainer } from "./styles";

export const FormDelivery = () => {
  const { register } = useFormContext();

  return (
    <FormContainer>
      <input type="text" placeholder="CEP" className="cep" {...register("cep")} />
      <input type="text" placeholder="Rua" className="street" {...register("street")} />
      <input type="text" placeholder="Número" className="number" {...register("number")} />
      <input type="text" placeholder="Complemento" className="complement" {...register("complement")} />
      <input type="text" placeholder="Bairro" {...register("district")} />
      <input type="text" placeholder="Cidade" {...register("city")} />
      <input type="text" placeholder="UF" {...register("uf")} />
  </FormContainer>
  );
}