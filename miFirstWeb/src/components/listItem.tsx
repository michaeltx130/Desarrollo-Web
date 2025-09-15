type ListItemProps = {
    mensaje: string
}

function listItems({
    mensaje
}: ListItemProps) {
  return (
    <li>
      {mensaje}
    </li>
  );
}

export default listItems;
