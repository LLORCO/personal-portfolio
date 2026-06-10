import { useEffect } from "react";
import { useContent } from "../hooks/useContent";

export default function DocumentMeta() {
  const { meta } = useContent();

  useEffect(() => {
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", meta.description);
  }, [meta]);

  return null;
}
