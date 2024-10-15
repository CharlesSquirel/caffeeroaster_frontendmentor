import DropdownForm from '../common/DropdownForm.tsx/DropdownForm';
import DropdownOption from '../common/DropdownOption/DropdownOption';

export default function CreateForm() {
  return (
    <form className="flex w-[328px] flex-col gap-[110px]">
      {/* how */}
      <DropdownForm title="How do you drink your coffee?">
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
      </DropdownForm>
      {/* type */}
      <DropdownForm title="What type of coffee?">
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
      </DropdownForm>
      {/* how much */}
      <DropdownForm title="How much do you like?">
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
      </DropdownForm>
      {/* grind */}
      <DropdownForm title="Want us to grind them?">
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
      </DropdownForm>
      {/* how often */}
      <DropdownForm title="How often should we deliver?">
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
        <DropdownOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
      </DropdownForm>
    </form>
  );
}
