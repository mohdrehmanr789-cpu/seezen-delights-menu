<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

Menu dish photos are bundled locally under their category folders in `src/assets/` and resolved by exact dish filename via Vite's eager URL globs, so production builds include the originals; preserve each category's existing fallback and keep category mappings isolated.
