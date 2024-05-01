/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback, useMemo } from 'react';
import { useFilters } from '@/lib/state/filters';
import { FILTER_DEFAULT_VALUE, FILTER_FEATURE_LABEL } from '@/constants/content';
import { Container, Box, Flex, Grid, Button, Text, Dialog, Separator, Card, Select, Badge, ScrollArea } from '@radix-ui/themes';
import { Color } from '../../../types/colors';
import { X, ListFilter } from 'lucide-react';
import { InfoTooltip } from '@/components/compound/info-tooltip';

type Props = {};

type OptionData = { [key: string]: any };

export const FilterDialogMenu = () => {
  const platforms = useFilters((state) => state.platforms);
  const features = useFilters((state) => state.features);
  const options = useFilters((state) => state.options);
  const filterOptionKeys = useMemo(() => Object.keys(options), [options]);

  useEffect(() => {
    console.log('filter dialog options', options);
  }, [platforms]);

  return (
    <Card id="filter-menu-card" className="!w-full min-h-[60px] !mb-8" variant="surface">
      <Grid width="100%" columns="1">
        {filterOptionKeys.map((o: string) => (
          <OptionSelect
            option={o}
            options={options[o]!}
            key={`filter-option-set-${o}`}
            optionData={o === FILTER_FEATURE_LABEL ? features : null}
          />
        ))}
      </Grid>

      <Separator />

      <SelectedOptionBadges />
    </Card>
  );
};

const OptionSelect = ({
  option,
  options,
  color,
  optionData = null,
}: {
  option: string;
  options: string[];
  color?: Color;
  optionData?: OptionData | null;
}) => {
  const setSelected = useFilters((state) => state.setSelected);
  const selecteds = useFilters((state) => state.selecteds);

  const removeSelected = useFilters((state) => state.removeSelected);

  const selectHandler = (value: string) => (value === FILTER_DEFAULT_VALUE ? removeSelected(option) : setSelected(option, value));

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button radius="large" variant="soft" color={color || 'iris'} mx="1" size="4" className="capitalize relative">
            Select {option} <ListFilter style={{ marginLeft: 32, position: 'absolute', right: 8 }} size="16" />
          </Button>
        </Dialog.Trigger>
        <Dialog.Content style={{ maxWidth: 450 }} className="filter-dialog">
          <Dialog.Title>Select {option}</Dialog.Title>
          <ScrollArea style={{ height: 400, paddingRight: 12 }}>
            <Flex direction="column" p="0" mr="1">
              {options.map((posssibleOption) => (
                <SelectOption
                  title={posssibleOption}
                  key={`filter-option-${posssibleOption}`}
                  active={selecteds[option] === posssibleOption}
                  onSelectHandler={() => selectHandler(posssibleOption)}
                  optionData={optionData ? optionData.find((o: FeatureNode) => o.title === posssibleOption) : null}
                />
              ))}
            </Flex>
          </ScrollArea>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

const SelectOption = ({
  title,
  active,
  onSelectHandler,
  optionData,
}: {
  title: string;
  description?: string;
  active?: boolean;
  onSelectHandler: any;
  optionData?: FeatureNode;
}) => {
  return (
    <Card
      my="1"
      variant="surface"
      className="select-item relative  py-2 px-3 rounded-2xl border border-subtle-border overflow-hidden"
      onClick={onSelectHandler}
    >
      {active && <Box className="select-item-active" />}
      {optionData ? <RichSelectOptionItem optionData={optionData} /> : <SimpleSelectOptionItem title={title} />}
    </Card>
  );
};

const SimpleSelectOptionItem = ({ title }: { title: string }) => (
  <Flex direction="column" align="stretch" className="relative">
    <Text size="2" weight="bold" color="iris">
      {title}
    </Text>
  </Flex>
);

const RichSelectOptionItem = ({ optionData }: { optionData: FeatureNode }) => {
  return (
    <Flex direction="column" align="stretch" className="relative">
      <Flex align="center">
        <Text size="2" weight="bold" color="iris" mr="2">
          {optionData.title}
        </Text>{' '}
        <InfoTooltip text={optionData.description!} />
      </Flex>
      <Flex>
        <Text color="gray" size="2">
          {optionData.description?.slice(0, 120)}
        </Text>
      </Flex>
    </Flex>
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

  console.log('option', option);

  return (
    <Button variant="soft" color="plum" className="remove-selection !mx-1" size="2" onClick={removeHandler}>
      {label} <X size={14} />
    </Button>
  );
};
