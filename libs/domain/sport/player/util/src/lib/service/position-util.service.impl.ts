import { Position, PositionUtilService } from '@zsport/api';

export class PositionUtilServiceImpl extends PositionUtilService {
    public getPositions = (categoryName: string): Position[] => {
        return this.positions[categoryName];
    };
}
