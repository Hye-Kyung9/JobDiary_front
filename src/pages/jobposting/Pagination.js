router.get("/", function (req, res, next) {
  console.log("REST API Get Method - Read All");
  // 페이지 크기
  var countPerPage = req.query.countperpage;
  // 페이지 번호
  var pageNo = req.query.pageno;

  if (
    countPerPage == undefined ||
    typeof countPerPage == "undefined" ||
    countPerPage == null
  ) {
    countPerPage = 10;
  } else {
    countPerPage = parseInt(countPerPage);
  }
  if (pageNo == undefined || typeof pageNo == "undefined" || pageNo == null) {
    pageNo = 0;
  } else {
    pageNo = parseInt(pageNo);
  }

  if (pageNo > 0) {
    // 전체 크기
    var totalCount = boardList.length;
    // 시작 번호
    var startItemNo = (pageNo - 1) * countPerPage;
    // 종료 번호
    var endItemNo = pageNo * countPerPage - 1;
    // 종료 번호가 전체 크기보다 크면 전체 크기로 변경
    if (endItemNo > totalCount - 1) {
      endItemNo = totalCount - 1;
    }
    var boardPageList = [];
    if (startItemNo < totalCount) {
      for (var index = startItemNo; index <= endItemNo; index++) {
        boardPageList.push(boardList[index]);
      }
    }
    res.json({ success: true, data: boardPageList });
  } else {
    res.json({ success: true, data: boardList });
  }
});
