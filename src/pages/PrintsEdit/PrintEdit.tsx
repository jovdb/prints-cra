import { Header, HeaderLeft, HeaderRight } from '../../components/header';
import { Logo } from '../../components/logo';
import { Price } from '../../components/price';
import { PrintEdit as PrintsEdit2 } from '../../components/print-edit';
import { BottomMenu, BottomMenuButton } from '../../components/bottom-menu';
import { Page, PageHeader, PageBody, PageFooter } from '../../components/page';
import { useLabels } from '../../hooks/labels';

export function PrintEdit() {

  const [labels, areLabelsLoading] = useLabels(["Label.PrintEdit.Format", "Label.PrintEdit.Effect"]);
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
        <PrintsEdit2 />
      </PageBody>
      <PageFooter>
        <BottomMenu>
          <BottomMenuButton>{labels["Label.PrintEdit.Format"]}</BottomMenuButton>
          <BottomMenuButton>{labels["Label.PrintEdit.Effect"]}</BottomMenuButton>
        </BottomMenu>
      </PageFooter>
    </Page>
  );
}
