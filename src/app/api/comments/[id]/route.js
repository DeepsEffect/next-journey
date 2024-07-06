export async function PATCH(request, { params }) {
  const body = await request.json();
  const index = comments.findIndex((c) => c.id === parseInt(params.id));
  comments[index] = {
    text : body.text
  }
  return Response.json({
    message: "comment updated",
    comments
  });
}

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
