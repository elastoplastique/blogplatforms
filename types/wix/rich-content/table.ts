export type BodyItemTableData = {
   dimensions: {
     colsWidthRatio: Array<number>;
     rowsHeight: Array<number>;
     colsMinWidth: Array<number>;
   };
   rowHeader: boolean;
 };
 
 export interface TableCell extends Wix.BodyItem<'TABLE_CELL'> {
   tableCellData?: any;
   nodes: Wix.BodyItem<Wix.BodyItemType>[];
 }
 
 export interface TableRow extends Wix.BodyItem<'TABLE_ROW'> {
   nodes: TableCell[];
 }
 export interface Table extends Wix.BodyItem<'TABLE'> {
   tableData: BodyItemTableData;
   nodes: Wix.BodyItem<Wix.BodyItemType>[];
 }
 
 // export type _Table = {
 //   type: string;
 //   _id: string;
 //   nodes: Array<{
 //     type: string;
 //     _id: string;
 //     nodes: Array<{
 //       type: string;
 //       _id: string;
 //       nodes: Array<{
 //         type: string;
 //         _id: string;
 //         nodes: Array<{
 //           type: string;
 //           _id: string;
 //           nodes: Array<any>;
 //           textData: {
 //             text: string;
 //             decorations: Array<any>;
 //           };
 //         }>;
 //         paragraphData: {
 //         };
 //       }>;
 //       tableCellData: {
 //       };
 //     }>;
 //   }>;
 
 // };
 