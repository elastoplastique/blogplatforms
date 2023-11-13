import React, { useState, useEffect, useMemo } from 'react';
import { Command } from 'cmdk';

export function CommandBar(props: { features: FeatureNode[]; platforms: PlatformNode[] }) {
  const features = useMemo(() => props.features, [props.features]);
  const platforms = useMemo(() => props.platforms, [props.platforms]);

  const [value, setValue] = useState('apple');
  const [search, setSearch] = useState('');

  return (
    <Command
      className="relative z-10"
      label="Command Menu"
      value={value}
      onValueChange={setValue}
      filter={(value, search) => {
        console.log('value', value);
        console.log('search', search);
        if (value.includes(search.toLowerCase())) return 1;
        return 0;
      }}
    >
      <Command.Input value={search} onValueChange={setSearch} />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Features">
          {features.map((f: FeatureNode) => (
            <Command.Item key={f.slug}>{f.title}</Command.Item>
          ))}
        </Command.Group>
        <Command.Group heading="Platforms">
          {platforms.map((p: FeatureNode) => (
            <Command.Item key={p.slug}>{p.title}</Command.Item>
          ))}
        </Command.Group>
      </Command.List>
    </Command>
  );
}
