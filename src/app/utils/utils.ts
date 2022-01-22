export function trimTitle(title: string): string {
    if (title.length <= 15) {
        return title;
    }

    return title.replace(/\..*/, '').slice(0, 12).concat('...');
}