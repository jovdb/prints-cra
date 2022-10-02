import { Header, HeaderLeft, HeaderRight } from '../../components/header';
import { Logo } from '../../components/logo';
import { Price } from '../../components/price';
import { PrintsList } from '../../components/prints-list';
import { BottomMenu, BottomMenuButton } from '../../components/bottom-menu';
import { Page, PageHeader, PageBody, PageFooter } from '../../components/page';
import { useLabels } from '../../hooks/labels';

export function Prints() {

  const [labels, areLabelsLoading] = useLabels(["Label.Prints.AdddPhotos"]);
  if (areLabelsLoading) return null;

  return (
    <Page>
      <PageHeader>
        <Header>
          <HeaderLeft><Logo /></HeaderLeft>
          <HeaderRight><Price /></HeaderRight>
        </Header>
      </PageHeader>
      <PageBody>
        <PrintsList />
      </PageBody>
      <PageFooter>
        <BottomMenu>
          <BottomMenuButton>{labels["Label.Prints.AdddPhotos"]}</BottomMenuButton>
        </BottomMenu>
      </PageFooter>
    </Page>
  );
}
