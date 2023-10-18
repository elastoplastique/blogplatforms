import { motion } from 'framer-motion';
import { Text } from '@/components/ui';

type Props = {
  title: string;
  data: string[];
  color?: string;
};

export const Table = (props: Props) => (
  <motion.div className="table min-w-full mt-8" style={{ backgroundColor: props.color }}>
    <table className="min-w-full">
      <thead>
        <tr>
          <th>{props.title}</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item: string, index: number) => (
          <tr key={`pros-${index}`}>
            <td>
              <Text size="3">{item}</Text>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </motion.div>
);
