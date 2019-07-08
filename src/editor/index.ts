

export function hello() : void {

  const container: HTMLElement | null = document.getElementById('container');
  if (container)
    container.innerText = 'hello';
}

