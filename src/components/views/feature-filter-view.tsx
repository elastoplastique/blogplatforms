/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback, useMemo } from 'react';
import { useFilters } from '@/lib/state/filters';
import { FILTER_DEFAULT_VALUE, FILTER_FEATURE_LABEL } from '@/constants/content';
import { Container, Box, Flex, Grid, Button, Text, Dialog, Separator, Card, Select, Badge, ScrollArea } from '@/components/ui';
import { X, ListFilter } from 'lucide-react';
import Link from 'next/link';
import { InfoTooltip } from '@/components/compound/info-tooltip';
import { motion } from 'framer-motion';
import { ROUTES } from '@/constants/routes';
import { FEATURE_CATEGORY_COLORS } from '@/constants/features';
import { DEFAULT_COLOR } from '@/constants/colors';
import { cn } from '@/lib/utils';

type Props = { features: FeatureNode[] };

type OptionData = { [key: string]: any };

export const FilterFeatureView = ({ features }: Props) => {
  const options = useFilters((state) => state.options);

  const filterOptionKeys = useMemo(() => Object.keys(options), [options]);
  //   console.log('features', features);

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

      {/* <Separator />

      <SelectedOptionBadges /> */}
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
  console.log('option', option);

  return (
    <>
      <motion.ul className="flex flex-row flex-wrap justify-center items-center list-none">
        {options.map((posssibleOption) => (
          <motion.li key={`filter-option-${posssibleOption}`}>
            <SelectOption
              title={posssibleOption}
              active={selecteds[option] === posssibleOption}
              onSelectHandler={() => selectHandler(posssibleOption)}
              optionData={optionData ? optionData.find((o: FeatureNode) => o.title === posssibleOption) : null}
            />
          </motion.li>
        ))}
      </motion.ul>
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
  const color: Color =
    optionData.category && optionData.category.length > 0
      ? FEATURE_CATEGORY_COLORS[optionData.category[0] as Feature]
      : (DEFAULT_COLOR as Color);
  return (
    <Badge className={'m-1 !cursor-pointer relative overflow-hidden !px-8'} color={color}>
      <motion.div style={{ minHeight: 36 }} onClick={onSelectHandler} className="flex flex-row justify-center items-center">
        <motion.div className="mr-2">{optionData.title}</motion.div>

        <InfoTooltip text={optionData.header!} />
        {active && <Box className="select-item-active" />}
      </motion.div>
    </Badge>
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

  //   console.log('option', option);

  return (
    <Button variant="soft" color="plum" className="remove-selection !mx-1" size="2" onClick={removeHandler}>
      {label} <X size={14} />
    </Button>
  );
};
