'use client';

import { defaultFormData } from 'app/data/defaultFormData';
import { FormTypes } from 'app/utils/types/formTypes';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import CreateNav from '../CreateNav/CreateNav';
import CreateForm from '../CreatForm/CreatForm';

export default function Create() {
  const methods = useForm<FormTypes>({
    defaultValues: defaultFormData,
  });
  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    console.log(data);
  };
  return (
    <section className="mb-[120px] w-[328px] md:mb-[144px] md:w-[689px] xl:flex xl:w-[1110px] xl:gap-[125px]">
      <FormProvider {...methods}>
        <CreateNav />
        <CreateForm methods={methods} onSubmit={onSubmit} />
      </FormProvider>
    </section>
  );
}
