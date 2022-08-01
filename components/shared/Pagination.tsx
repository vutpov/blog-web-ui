import { Pagination as AntdPagination } from 'antd'
import styled from 'styled-components'

const StyledPagination = styled(AntdPagination)`
  height: 50px;
  display: flex;
  align-items: center;

  .ant-pagination-simple-pager input {
    width: 50px;
    height: 50px;
    padding: 0;
    border-radius: 8px;
    border-color: ${({ theme }) => theme.primaryColor.main};
  }

  .ant-pagination-prev,
  .ant-pagination-next,
  .ant-pagination-simple-pager {
    height: 50px;
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    display: flex;
    align-items: center;
  }
`

export default StyledPagination
