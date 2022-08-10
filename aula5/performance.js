const getProduto = (id) => {
  return new Promise((resolve) => setTimeout(() => resolve({ id }), 200));
};

const listDeIds = [1, 2, 3, 4, 5, 6];

async function porLoop() {
  console.time("loop");
  const produtos = [];

  for (let i of listDeIds) {
    const produto = await getProduto(i);
    produtos.push(produto);
  }
  console.timeEnd("loop");
  console.log("loop finalizado");
}

async function porPromiseAll() {
  console.time(".all");
  const promises = listDeIds.map((id) => getProduto(id));
  const produtos = await Promise.all(promises);

  console.timeEnd(".all");
  console.log(".all finalizado");
}

porLoop();
porPromiseAll();
