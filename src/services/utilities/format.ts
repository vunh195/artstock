export const formatAddressToHuman = (address: string | undefined) => {
  if (address) {
    return (
      address?.substring(0, 5) +
      '...' +
      address?.substring(address.length - 5, address.length)
    );
  }
  return '...';
};
