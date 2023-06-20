# API

<table style="width: 100%">
<tbody>
<tr style="height: 23px;">
<td style="height: 23px; width: 73px;">fn</td>
<td style="height: 23px; width: 119px;">API</td>
<td style="height: 23px; width: 58px;">Method</td>
<td style="height: 23px; width: 128px;">req</td>
<td style="height: 23px; width: 206px;">res</td>
<td style="height: 23px; width: 118px;">reqHeader</td>
<td style="height: 23px; width: 117.172px;">resHeader</td>
<td style="height: 23px; width: 195.828px;">resErr</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 73px;">게시글 전체 조회</td>
<td style="height: 23px; width: 119px;">/</td>
<td style="height: 23px; width: 58px;">GET</td>
<td style="height: 23px; width: 128px;">-</td>
<td style="height: 23px; width: 206px;">
<p>[</p>
<p>&nbsp; {</p>
<p>&nbsp; &nbsp; _id,</p>
<p>&nbsp; &nbsp; postId,</p>
<p>&nbsp; &nbsp; title,</p>
<p>&nbsp; &nbsp; userId,</p>
<p>&nbsp; &nbsp; nickname,</p>
<p>&nbsp; &nbsp; body,</p>
<p>&nbsp; &nbsp; date,</p>
<p>&nbsp; &nbsp; __v</p>
<p>&nbsp; }&nbsp;</p>
<p>]</p>
</td>
<td style="height: 23px; width: 118px;">-</td>
<td style="height: 23px; width: 117.172px;">-</td>
<td style="height: 23px; width: 195.828px;">
<div>
<div>- 전체 데이터를 불러오는데 실패하였습니다.</div>
</div>
</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 73px;">게시글 상세 조회</td>
<td style="height: 23px; width: 119px;">/post?id=</td>
<td style="height: 23px; width: 58px;">GET</td>
<td style="height: 23px; width: 128px;">-</td>
<td style="height: 23px; width: 206px;">
<p>{</p>
<p>&nbsp; post : {</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; _id,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; postId,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; title,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; userId,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; nickname,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; body,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; date,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; __v</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;},</p>
<p>&nbsp; comments : [</p>
<p>&nbsp; &nbsp; {</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; _id,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; commentId,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; postId,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; userId,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; nickname,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; body,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; date,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; __v</p>
<p>&nbsp; &nbsp; }</p>
<p>&nbsp; ]</p>
<p>}</p>
</td>
<td style="height: 23px; width: 118px;">-</td>
<td style="height: 23px; width: 117.172px;">-</td>
<td style="height: 23px; width: 195.828px;">
<div>
<div>- 게시물 상세 정보를 불러오는데 실패하였습니다.</div>
</div>
</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 73px;">게시글 생성</td>
<td style="height: 23px; width: 119px;">/post/create</td>
<td style="height: 23px; width: 58px;">POST</td>
<td style="height: 23px; width: 128px;">{ title, body }</td>
<td style="height: 23px; width: 206px;">
<div>
<div>{ message: '게시글이 정상 생성되었습니다.' }</div>
</div>
</td>
<td style="height: 23px; width: 118px;">{ &ldquo;auth&rdquo;: &ldquo;Bearer ...&rdquo; }</td>
<td style="height: 23px; width: 117.172px;">-</td>
<td style="height: 23px; width: 195.828px;">
<div>- 게시글 제목은 필수입니다.</div>
<div>
<div>
<div>
<div>
<div>
<div>- 게시글 내용은 필수입니다.</div>
</div>
</div>
</div>
</div>
</div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>- 게시글 제목의 형식이 일치하지 않습니다.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>- 게시글 내용의 형식이 일치하지 않습니다.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>- 게시글 작성에 실패하였습니다.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 73px;">게시글 수정</td>
<td style="height: 23px; width: 119px;">/post/update</td>
<td style="height: 23px; width: 58px;">PATCH</td>
<td style="height: 23px; width: 128px;">
<p>{</p>
<p>postId,</p>
<p>title,</p>
<p>body</p>
<p>}</p>
</td>
<td style="height: 23px; width: 206px;">
<div>
<div>{ message: '정상 수정되었습니다.' }</div>
</div>
</td>
<td style="height: 23px; width: 118px;">{ &ldquo;auth&rdquo;: &ldquo;Bearer ...&rdquo; }</td>
<td style="height: 23px; width: 117.172px;">-</td>
<td style="height: 23px; width: 195.828px;">- 게시글 번호는 필수입니다.
<div>
<div>-&nbsp;게시글 제목은 필수입니다.</div>
<div>-&nbsp;게시글 내용은 필수입니다.</div>
<div>-&nbsp;게시글 번호의 형식이 일치하지 않습니다.</div>
<div>-&nbsp;게시글 제목의 형식이 일치하지 않습니다.</div>
<div>-&nbsp;게시글 내용의 형식이 일치하지 않습니다.</div>
<div>-&nbsp;게시글 수정은 본인이 작성한 게시글만 가능합니다.</div>
<div>-&nbsp;게시글 수정에 실패하였습니다.</div>
</div>
</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 73px;">게시글 삭제</td>
<td style="height: 23px; width: 119px;">/post/delete</td>
<td style="height: 23px; width: 58px;">DELETE</td>
<td style="height: 23px; width: 128px;">{ postId }</td>
<td style="height: 23px; width: 206px;">
<div>
<div>{ message: '정상 삭제되었습니다.' }</div>
</div>
</td>
<td style="height: 23px; width: 118px;">{ &ldquo;auth&rdquo;: &ldquo;Bearer ...&rdquo; }</td>
<td style="height: 23px; width: 117.172px;">-</td>
<td style="height: 23px; width: 195.828px;">
<p>-&nbsp;게시글 번호는 필수입니다.</p>
<p>-&nbsp;게시글 번호의 형식이 일치하지 않습니다.</p>
<p>-&nbsp;게시글 삭제는 본인이 작성한 게시글만 가능합니다.</p>
<p>-&nbsp;게시글 삭제를 실패하였습니다.</p>
</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 73px;">댓글 생성</td>
<td style="height: 23px; width: 119px;">/comment/create</td>
<td style="height: 23px; width: 58px;">POST</td>
<td style="height: 23px; width: 128px;">{ postId, body }</td>
<td style="height: 23px; width: 206px;">
<div>
<div>{ message: '댓글이 정상 등록되었습니다.' }</div>
</div>
</td>
<td style="height: 23px; width: 118px;">{ &ldquo;auth&rdquo;: &ldquo;Bearer ...&rdquo; }</td>
<td style="height: 23px; width: 117.172px;">-</td>
<td style="height: 23px; width: 195.828px;">
<p>-&nbsp;게시글 번호는 필수입니다.</p>
<p>-&nbsp;댓글 내용은 필수입니다.</p>
<p>-&nbsp;게시글 번호의 형식이 일치하지 않습니다.</p>
<p>-&nbsp;댓글 내용의 형식이 일치하지 않습니다.</p>
<p>-&nbsp;댓글 등록에 실패하였습니다.</p>
</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 73px;">댓글 수정</td>
<td style="height: 23px; width: 119px;">/comment/update</td>
<td style="height: 23px; width: 58px;">PATCH</td>
<td style="height: 23px; width: 128px;">{ commentId, body }</td>
<td style="height: 23px; width: 206px;">
<div>
<div>{ message: '정상 수정되었습니다.' }</div>
</div>
</td>
<td style="height: 23px; width: 118px;">{ &ldquo;auth&rdquo;: &ldquo;Bearer ...&rdquo; }</td>
<td style="height: 23px; width: 117.172px;">-</td>
<td style="height: 23px; width: 195.828px;">
<p>-&nbsp;댓글 번호는 필수입니다.</p>
<p>-&nbsp;댓글 내용은 필수입니다.</p>
<p>-&nbsp;댓글 번호의 형식이 일치하지 않습니다.</p>
<p>-&nbsp;댓글 내용의 형식이 일치하지 않습니다.</p>
<p>-&nbsp;댓글 수정은 본인이 작성한 댓글만 가능합니다.</p>
<p>-&nbsp;댓글 수정에 실패하였습니다.</p>
</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 73px;">댓글 삭제</td>
<td style="height: 23px; width: 119px;">/comment/delete</td>
<td style="height: 23px; width: 58px;">DELETE</td>
<td style="height: 23px; width: 128px;">{ commentId }</td>
<td style="height: 23px; width: 206px;">
<div>
<div>{ message: '정상 삭제되었습니다.' }</div>
</div>
</td>
<td style="height: 23px; width: 118px;">{ &ldquo;auth&rdquo;: &ldquo;Bearer ...&rdquo; }</td>
<td style="height: 23px; width: 117.172px;">-</td>
<td style="height: 23px; width: 195.828px;">
<p>-&nbsp;댓글 번호는 필수입니다.</p>
<p>-&nbsp;댓글 번호의 형식이 일치하지 않습니다.</p>
<p>-&nbsp;댓글 삭제는 본인이 작성한 댓글만 가능합니다.</p>
<p>-&nbsp;댓글 삭제에 실패하였습니다.</p>
</td>
</tr>
<tr style="height: 183px;">
<td style="height: 183px; width: 73px;">회원가입</td>
<td style="height: 183px; width: 119px;">/member/register</td>
<td style="height: 183px; width: 58px;">POST</td>
<td style="height: 183px; width: 128px;">
<p>{</p>
<p>id,</p>
<p>password,</p>
<p>nickname,</p>
<p>confirmPassword</p>
<p>}</p>
</td>
<td style="height: 183px; width: 206px;">
<div>
<div>{ message: '정상 등록되었습니다.' }</div>
</div>
</td>
<td style="height: 183px; width: 118px;">-&nbsp;</td>
<td style="height: 183px; width: 117.172px;">&nbsp;-</td>
<td style="height: 183px; width: 195.828px;">
<p>-&nbsp;id값은 필수입니다.</p>
<p>-&nbsp;password값은 필수입니다.</p>
<p>-&nbsp;confirmPassword값은 필수입니다.</p>
<p>-&nbsp;nickname값은 필수입니다.</p>
<p>-&nbsp;nickname값은 2자 이상 16자 이하, 영어 또는 숫자 또는 한글로 구성해 주세요.</p>
<p>-&nbsp;id값은 영문자로 시작하는 영문자 또는 숫자 6~20자를 입력해 주세요.</p>
<p>-&nbsp;password값은 8~16자 영문, 숫자, 특수문자를 최소 한가지씩 조합해서 입력해 주세요.</p>
<p>-&nbsp;입력한 id혹은 nickname이 중복된 값입니다.</p>
<p>-&nbsp;오류가 발생했습니다.&nbsp;</p>
</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 73px;">로그인</td>
<td style="height: 23px; width: 119px;">/member/login</td>
<td style="height: 23px; width: 58px;">POST</td>
<td style="height: 23px; width: 128px;">{ id, password }</td>
<td style="height: 23px; width: 206px;">
<div>
<div>{ message: '로그인 성공' }</div>
</div>
</td>
<td style="height: 23px; width: 118px;">-</td>
<td style="height: 23px; width: 117.172px;">{ &ldquo;auth&rdquo;: &ldquo;Bearer ...&rdquo; }</td>
<td style="height: 23px; width: 195.828px;">
<p>-&nbsp;id값은 필수입니다.</p>
<p>-&nbsp;password값은 필수입니다.</p>
<p>-&nbsp;로그인에 실패하였습니다.</p>
<p>-&nbsp;로그인 도중 오류가 발생하였습니다.</p>
</td>
</tr>
</tbody>
</table>
