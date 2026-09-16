import re
with open('lib/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()
lines = content.split('\n')
counts = {}
for line in lines:
    m = re.match(r'^\s+(\w+):', line)
    if m:
        k = m.group(1)
        counts[k] = counts.get(k, 0) + 1
for k, v in sorted(counts.items()):
    if v > 1:
        print(k, v)
