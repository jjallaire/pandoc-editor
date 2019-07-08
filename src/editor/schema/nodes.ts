
import { schema } from "prosemirror-schema-basic"

import { addListNodes } from "prosemirror-schema-list"

import OrderedMap from "orderedmap"
import { NodeSpec } from "prosemirror-model"

export function pandocNodes() {

  

  // add list nodes to standard schema
  // schema.spec.ndoes is an OrderedMap (https://github.com/marijnh/orderedmap)
  let schemaNodes = addListNodes(<OrderedMap<NodeSpec>>schema.spec.nodes, "paragraph block*", "block")

  // additional nodes 
  let nodes: { [key: string]: object } = {
  
  }


  // add the nodes
  return Object.keys(nodes).reduce((schemaNodes, node) => {
    return schemaNodes.update(node, nodes[node]);
  }, schemaNodes);
}

