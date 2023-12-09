'use client'
import pao from '../../../../public/pao.jpg'
import like from '../../../../public/like.png'
import dislike from '../../../../public/dislike.png'
import Image from "next/image"
import Head from 'next/head'

export const Car = () => {
    return (
        <div>
            <Head>
                <title>Carrinho</title>
            </Head>
            <div className="littleCar">
                <div className="image">
                    <Image
                        src={pao}
                        alt='imagem do item'
                    />
                </div>
                <div className="text">
                    <div className="title">
                        <h2>Pão caseiro</h2>
                    </div>
                    <div className="price">
                        R$ 5
                    </div>
                    <div className="rate">
                        <div className="title">
                            Avalição
                        </div>
                        <div className="avaliation">
                            <div className="good">
                                <Image
                                    src={like}
                                    alt='Gostei'
                                    title='Gostou?'
                                    width={28}
                                    height={28}
                                />
                            </div>
                            <div className="bad">
                                <Image
                                    src={dislike}
                                    alt='Não gostei'
                                    title='Não gostou?'
                                    width={28}
                                    height={28}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="obs">
                        <div className="title">
                            Observação
                        </div>
                        <div className="field">
                            <input type="text" name="obs" id="obs" placeholder='Coloque a obeservação' />
                        </div>
                    </div>
                    <div className="finish">
                        <div className="qtd">
                            <div className="less">
                                -
                            </div>
                            <div className="number">
                                2
                            </div>
                            <div className="plus">
                                +
                            </div>
                        </div>
                        <div className="btn">
                            <input type="submit" value="Adicionar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}