'use client';
import { dropdownData } from 'app/data/formData';
import { FormTypes } from 'app/utils/types/formTypes';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import DropdownForm from '../common/DropdownForm.tsx/DropdownForm';
import DropdownOption from '../common/DropdownOption/DropdownOption';
import Summary from '../Summary/Summary';

interface CreateFormProps {
  onSubmit: SubmitHandler<FormTypes>;
  methods: UseFormReturn<FormTypes, any, undefined>;
}

export default function CreateForm({ onSubmit, methods }: CreateFormProps) {
  return (
    <form
      className="flex w-[328px] flex-col items-center md:w-[689px] xl:items-end"
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <div className="mb-[120px] flex flex-col gap-[96px] md:mb-[144px] md:gap-[100px]">
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
      </div>
      <Summary />
    </form>
  );
}
