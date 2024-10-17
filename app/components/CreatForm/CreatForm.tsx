'use client';
import { dropdownData } from 'app/data/formData';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import DropdownForm from '../common/DropdownForm.tsx/DropdownForm';
import DropdownOption from '../common/DropdownOption/DropdownOption';
import PlanButton from '../common/PlanButton';
import Summary from '../Summary/Summary';

export default function CreateForm() {
  const methods = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form
        className="flex w-[328px] flex-col items-center gap-[110px]"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {dropdownData.map(({ title, optionsInfo, name }, index) => (
          <DropdownForm title={title} index={index} key={index}>
            <DropdownOption
              title={optionsInfo.option_first_title}
              description={optionsInfo.option_first_description}
              name={name}
              value={optionsInfo.option_first_value}
            />
            <DropdownOption
              title={optionsInfo.option_second_title}
              description={optionsInfo.option_second_description}
              name={name}
              value={optionsInfo.option_second_value}
            />
            <DropdownOption
              title={optionsInfo.option_third_title}
              description={optionsInfo.option_third_description}
              name={name}
              value={optionsInfo.option_third_value}
            />
          </DropdownForm>
        ))}
        <Summary />
        <PlanButton mode="submit" />
      </form>
    </FormProvider>
  );
}
