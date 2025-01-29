#!/bin/bash

rename_md_to_mdx() {
    local files
    if ! files=$(find . -type f -name "*.md"); then
        printf "Error: Failed to find .md files.\n" >&2
        return 1
    fi

    if [[ -z "$files" ]]; then
        printf "No .md files found.\n"
        return 0
    fi

    while IFS= read -r file; do
        local new_file="${file%.md}.mdx"
        if ! mv "$file" "$new_file"; then
            printf "Error: Failed to rename '%s' to '%s'.\n" "$file" "$new_file" >&2
            return 1
        fi
    done <<< "$files"

    printf "All .md files have been renamed to .mdx.\n"
}

main() {
    rename_md_to_mdx
}

main
