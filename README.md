# bun-templates

## Requirements

```bash
scaffold() {
    local template="$1"
    local name="$2"
    npx tiged "$template" "$name"
    find "$name" -type f | xargs sed -i "s/unique-name/$name/g"
    find "$name" | xargs rename "s/unique-name/$name/g" "$name"
}
```

## base

```bash
scaffold sakkeam/bun-templates/base my-unique-name
```
