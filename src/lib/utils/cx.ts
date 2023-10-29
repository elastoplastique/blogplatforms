export function cx(...classes: (string | number | boolean | undefined | null)[]) {
    return classes.filter(Boolean).join(' ')
}