
// 全局分页信息
export const paginationObj = {
  current: 1,
  pageSize: 25,
  total: 0,
  size: "default",
  showSizeChanger: true,
  showTotal: (total, range) => `Displaying ${range[0]}-${range[1]} of ${total} items`,
  pageSizeOptions: [25, 50, 100],
};
