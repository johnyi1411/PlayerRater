import styled from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
`

export const FlexColumnDiv = styled(FlexDiv)`
  flex-direction: column;  
`

export const FlexSpaceBetweenDiv = styled(FlexDiv)`
  justify-content: space-between;
`

export const FlexAlignCenterDiv = styled(FlexDiv)`
  align-items: center;
`
