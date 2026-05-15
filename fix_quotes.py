import os
import glob

for file_path in glob.glob("src/app/blog/*/page.tsx"):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Unicode quotes to replace
    content = content.replace('\u2018', "'")  # left single
    content = content.replace('\u2019', "'")  # right single
    content = content.replace('\u201C', '"')  # left double
    content = content.replace('\u201D', '"')  # right double
    content = content.replace('\u2013', '-')  # en dash
    content = content.replace('\u2014', '-')  # em dash
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"✓ Fixed {len(glob.glob('src/app/blog/*/page.tsx'))} files")
