import { useConnectMetamaskPlaceholderLogic } from '@energyweb/origin-ui-user-logic';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { useUserAppEnv } from '../../../context';

export const useConnectMetamaskPlaceHolderEffects = () => {
  const { allowedChainIds } = useUserAppEnv();

  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down('md'));

  const { clickHandler, buttonText, title } =
    useConnectMetamaskPlaceholderLogic(allowedChainIds);

  return { clickHandler, buttonText, title, mobileView };
};
