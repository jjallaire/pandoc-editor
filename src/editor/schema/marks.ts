
import { schema } from "prosemirror-schema-basic"

export function pandocMarks() : object {

  let marks: { [key: string]: object} = {
    underline: {
      parseDOM: [
        {
          tag: 'u',
        },
        {
          style: 'text-decoration',
          getAttrs: (value: string) => value === 'underline',
        },
      ],
      toDOM: () => ['u', 0],
    },
    strikethrough: {
      parseDOM: [
        {
          tag: 's',
        },
        {
          tag: 'del',
        },
        {
          tag: 'strike',
        },
        {
          style: 'text-decoration',
          getAttrs: (value: string) => value === 'line-through',
        },
      ],
      toDOM: () => ['s', 0],
    }
  };

  // schema.spec.marks is an OrderedMap (https://github.com/marijnh/orderedmap)
  return Object.keys(marks).reduce((schemaMarks : any, mark: string) => {
    return schemaMarks.update(mark, marks[mark]);
  }, schema.spec.marks);

}