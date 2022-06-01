import type {BaseCompareOptions, CompareOptions, OrderEnum} from '../types';

const isValidOrder = (value: unknown | null | undefined): boolean =>
  typeof value === 'string' && (value === 'asc' || value === 'desc');

const getOptions = (customOptions?: CompareOptions): BaseCompareOptions => {
  let order: OrderEnum = 'asc';

  if (typeof customOptions === 'string' && isValidOrder(customOptions)) {
    order = customOptions;
  } else if (
    customOptions &&
    typeof customOptions === 'object' &&
    customOptions.order &&
    isValidOrder(customOptions.order)
  ) {
    ({order} = customOptions);
  }

  return {
    order,
  };
};

export default getOptions;
