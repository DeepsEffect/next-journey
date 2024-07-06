//* get method
export const GET = () => {
  return Response.json({
    comments,
  });
};

//* post method
export const POST = async(request) => {
  const newComment = await request.json();
  comments.push({
    id: comments.length + 1,
    text: newComment.text,
  });
  return Response.json({
    message: 'new comment added',
    comments
  });
};

//* patch method


const comments = [
  {
    id: 1,
    text: "comment one",
  },
  {
    id: 2,
    text: "comment two",
  },
  {
    id: 3,
    text: "comment three",
  },
];
