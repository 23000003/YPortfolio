class CurrentColor {
    private color: number = 1;
    public static colorInstance : InstanceType<typeof CurrentColor>;

    constructor(color: number) {
        this.color = color;
    }

    getColor(): number {
        return this.color;
    }

    setColor(newColor: number): void {
        this.color = newColor;
    }
}

export default CurrentColor;