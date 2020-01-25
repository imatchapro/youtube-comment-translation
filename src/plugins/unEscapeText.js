export default function(str) {
  return str
    .replace(/(&lt;)/g, "<")
    .replace(/(&gt;)/g, ">")
    .replace(/(&quot;)/g, '"')
    .replace(/(&#39;)/g, "'")
    .replace(/(&amp;)/g, "&");
}
