/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback, useMemo } from 'react';
import { useFilters } from '@/lib/state/filters';
import { FILTER_DEFAULT_VALUE } from '@/constants/content';
import { Container, Flex, Grid, Button, Text, Separator, Card, Select, Badge } from '@radix-ui/themes';
import { Color } from '../../../types/colors';
import { X } from 'lucide-react';

type Props = {};

export const FilterMenu = () => {
  const platforms = useFilters((state) => state.platforms);
  const options = useFilters((state) => state.options);
  const filterOptionKeys = useMemo(() => Object.keys(options), [options]);

  useEffect(() => {}, [platforms]);

  return (
    <Card id="filter-menu-card" className="!w-full min-h-[60px] !mb-8" variant="surface">
      <Grid width="100%" columns="2">
        {filterOptionKeys.map((o: string) => (
          <OptionSelect option={o} options={options[o]!} key={`filter-option-set-${o}`} />
        ))}
      </Grid>

      <Separator />

      <SelectedOptionBadges />
    </Card>
  );
};

const OptionSelect = ({ option, options, color }: { option: string; options: string[]; color?: Color }) => {
  const setSelected = useFilters((state) => state.setSelected);
  const selecteds = useFilters((state) => state.selecteds);

  const removeSelected = useFilters((state) => state.removeSelected);

  const selectHandler = (value: string) => (value === FILTER_DEFAULT_VALUE ? removeSelected(option) : setSelected(option, value));

  return (
    <Select.Root value={selecteds[option] || FILTER_DEFAULT_VALUE} size="3" onValueChange={selectHandler}>
      <Select.Trigger radius="large" variant="soft" color={color || 'iris'} mx="1" />
      <Select.Content>
        <Select.Item value={FILTER_DEFAULT_VALUE} key={`filter-option-all`}>
          <span className="capitalize">Select {option}</span>
        </Select.Item>
        <Select.Separator />
        {options.map((posssibleOption) => (
          <Select.Item value={posssibleOption} key={`filter-option-${posssibleOption}`} className="!capitalize">
            {posssibleOption}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

const SelectedOptionBadges = () => {
  const selecteds = useFilters((state) => state.selecteds);
  const selectedOptionNames = useMemo(() => Object.keys(selecteds), [selecteds]);

  return (
    <Flex direction="row" width="100%" align="center" p="1" justify="start">
      {selectedOptionNames.map((s: string) => (
        <SelectedOptionBadge option={s} label={selecteds[s]} key={`selected-option-${s}`} />
      ))}
    </Flex>
  );
};

const SelectedOptionBadge = ({ option, label }: { option: string; label: string }) => {
  const removeSelected = useFilters((state) => state.removeSelected);
  const removeHandler = useCallback(() => removeSelected(option), [option]);

  return (
    <Button variant="soft" color="plum" className="remove-selection !mx-1" size="2" onClick={removeHandler}>
      {label} <X size={14} />
    </Button>
  );
};
