import { Negociacoes } from "../models/negociacoes";

export class NegociacaoView {
    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>    
        `
    }
}