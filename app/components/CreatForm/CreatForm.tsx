import { dropdownData } from 'app/data/formData';
import DropdownForm from '../common/DropdownForm.tsx/DropdownForm';
import DropdownOption from '../common/DropdownOption/DropdownOption';

export default function CreateForm() {
  return (
    <form className="flex w-[328px] flex-col gap-[110px]">
      {dropdownData.map((dropdown, index) => (
        <DropdownForm title={dropdown.title} index={index} key={index}>
          <DropdownOption
            title={dropdown.optionsInfo.option_first_title}
            description={dropdown.optionsInfo.option_first_description}
            name={dropdown.optionsInfo.name}
          />
          <DropdownOption
            title={dropdown.optionsInfo.option_second_title}
            description={dropdown.optionsInfo.option_second_description}
            name={dropdown.optionsInfo.name}
          />
          <DropdownOption
            title={dropdown.optionsInfo.option_third_title}
            description={dropdown.optionsInfo.option_third_description}
            name={dropdown.optionsInfo.name}
          />
        </DropdownForm>
      ))}
    </form>
  );
}
