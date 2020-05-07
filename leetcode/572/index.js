var isSubtree = function(s, t) {
  if (preorder(s, t)) return true;
  if (s.left && isSubtree(s.left, t)) return true;
  if (s.right && isSubtree(s.right, t)) return true;
  return false
};
function preorder(s,t){
  if(!s && !t) return true
  if(s && t && s.val == t.val && preorder(s.left,t.left) && preorder(s.right,t.right)) return true
  return false
}