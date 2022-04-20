import { Block, BlockProps } from "baseui/block";
import { StatefulSelect as Search, TYPE } from "baseui/select";

interface AppSearchProps {}

const options = {
  options: [],
  labelKey: "",
  valueKey: "",
  placeholder: "Search",
  maxDropdownHeight: "300px",
};

export default function AppSearch({ ...props }: AppSearchProps & BlockProps) {
  return (
    <Block {...props}>
      <Search {...options} type={TYPE.search} getOptionLabel={(props) => (props.option && props.option.id ? props.option.id : null)} />
    </Block>
  );
}
