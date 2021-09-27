const pizzas=[
    {

        name: "KTM RC",
        varients: [
            "0",
            "6",
            "7",
            "8"
        ],
        prices: [
            {
                6: 200,
                7: 350,
                8: 400
            }
        ],
        category: "SPORTS BIKE",
        image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80&fbclid=IwAR1To4v13waBM4EWfpKivBegvyyGrLGgmX67xWmjWZATC-oRqm67o9DzJzw",
        description: "It has 293 cc air-cooled engine which produces of power. It has a fuel tank of 14 L and Very lightweight frame, wheels and No front or rear suspension."
    }, {

        name: "KAWASAKI NINJA",
        varients: [
            "0",
            "6",
            "7",
            "8"
        ],
        prices: [
            {
                "6": 200,
                "7": 350,
                "8": 400
            }
        ],
        category: "SPORTS BIKE",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUFBcVFBQUGBUaGh0bGxsbFBceIBsgGhwaGyEbHBsbIiwkGx0pHhoaJjsmKi4wMzMzGyI5PjkyPSwyMzABCwsLEA4QGhISHTAiIiAwMjIyMjIyMjIyMjIyMDIyMjIyMjIyMjIyMjIyMjAyMjIyMjIyMjIyMjIwMjIyMjIyMv/AABEIALQBGAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYHAf/EAEMQAAIBAgQDBgMFBwIEBgMAAAECEQADBBIhMQVBUQYTImFxgTKRoUJSYrHBI3KCktHh8AcUM1Oy8RUkVGNzohZDk//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAfEQEBAQEAAgIDAQAAAAAAAAAAARECEjEhQQNRYYH/2gAMAwEAAhEDEQA/AKmKIpyKIoG4oinIoigbiiKciiKBuKIpyKIoG4oinIoigbiiKciiKBuKIpyKIoG4oinIoigbiiKciiKBuKIpyKIoG4oinIoigbiiKciiKBuKIqTYwr3NERm9ATXl/DuhyupU9CKCPFEU5FEUDcURTkURQNxRFORRFA3FEU5FEUDcUU5FFAuKIpcURQIiiKXFEUCIoilhamJwq8SVFtiw3ErInqJkUECKIqxbg+IH/wCm57CfyqJdw9xDDW7o9bVz88sUDMURT74Zxujj1Uim4oERRFLiiKBEURS4oigRFEUuKIoERRFLigLOg3oERRFPdw33W/lNIKUCIoilxRFAiK1vZ/skXAuYgELutvYt5sfsjy39KwOK7VNgr6FLSXCplu8VoPknmPv6weWmvR+yvbrC4yEFw27zE/s3IB1+yjDwuB8+ooNauHQILaqqoNgoAA9BVFxjgy3BlYfusNx/nSrvvwAS2ka7Hl6b0XGkDofKqjlGPwD2XKuPQ8jUWK3Haq7bt2yb9tih+F0E69GGhQ+e35VjGRSA6NmtnYx9COTUDUURS4oiopEURS4oigRFEUuKIoERRS4ooFxRFORRFA3FEU5FEUDcVZ4PFLcKWr6F117u4GK3LZAnw3B4hMRv5GRUCKFaCCNwQR6jWizPtvMAMogXncdLgUt6ZlA+oNI49iUWyQdGfRekgqSJ9KoFxQcSrgGJGpEepAMf2qk7Q8Ve4owzMq3pDpLr49CMm+hIJg9QuwM1rGNZjtTxzvGFq27ZUJzjxDxbRHONaVwPjKC3kusQVOhIJ0PWNdKrMZhu9IaQjhgrlgdswUlhvmTnzgRyprjHDLmDvC3c1IRHMajxT/SorY2sdbZsiuC0SBBE+kgTFSYrBO7NDhiGBzK08/WtNwbjC3AA0C5OVh59QOhj2NBbxRFORRFRTcVIwWAuXmy20LHnGw8yToKg8SxJtW2cCSNh1JIA/Otpw/tdhBYX/br4uds6ZDzzn7R8+dEtwnAdi2kNeuiPuWxv6u35BferixwXBjRLduecaH/6xNZu72wvzoLf8n96Y/8Aymf+JYsv6KVPzB0rWM+UX/Eux+DvAhraqxEZlVAf5gM31qhwX+m1i2CDevG5ulxWyneMrWzKmNNZEydopY7bYNIBuXrTfcEXh6Row26irBO3/DiRN4qYOj22kfDq2UEJ7xUVn73AsVZYG4gu2p1dPCQOrqM2UeYkelIGDVmi3etsTqqFlBM7ZXVmS4T5EHyqdxz/AFPw1olMMjYhvvBsiD0JBZvYe9c2uYXF4y7cxQVLYuEtJIRG2Vgu+aNJ56yaK12JtLqtwKYOoMEA1W4xLOQFLdh5IGqKRB56c4Bj9arcPhLS2wr3UZlaYtsCrGMolyVBGi6fhjnq5jbOJt/triMLQiB3YVQJG0AdSJg71DW84X2nLW8iriAyLJGY3BAIEzExqOWlSMN27VDluqWXqoGYeqmB+VY7s52oXDXRcUK0qVKlokGNiOegrcJisLxNHK4d7jgakqgIOsKLoKqPcE/poXOGx2HxiMLbq4Ihrbbx5g6x56isJxvhFzAXDctgvhnPiU8ugJ6jk3t60naNGwdxbYbu3Rc4JJDeIsYB0JAjfrMGK3HYvitzGYci/csXAfCFYkM24IcEROxBGaQeVSjOKVYB0ModjzHkehFeEqNWYKvMnl/epmI7I4q3iCLIttZYg92zsjqNBOsh/UNrMaTFQOP9ncYpgJ3ypuyHVRyZ7RGZDv1HQ8qnslR0xTZc5VSushWkoPxCN43qTadXGZTINVmB4biLbhxkIEc2mOfKD6Tr9aumwlu1+ztkMo3YbEnUxvoCYHkKtIbiiKciiKim4opyK8oFxRFORRFAy9xFEvctqPxXFB/lJk/KixftupYOSgOUsttiJicsmAWjWAag8fxKWrRuNat3CSF8QAInnmiR/esm3E4t926Z7Zc3Ftl9EkAEzEmco30ETHWo2uJ4th0DkGSgnK12whafuhnYk+WWfKqb/wAdv3AHwz3LQjXxlxM/C0W1XbounU1A4ZZOIhEsJbtg+MkkyDrlOUJJ8jt5VshbtgALbtqoEABdAOgmgznDScW7W8Stm4xlkcEAkrHhgaSYJ9QZBnRXaHgX+5KlTYtuuaYtZM5MfGVMSCD9kbmmO1he33Ztyia6rIgiI20U9DvV9gb7XMOt+7bz3UUs6DTvVWddtHyiY+1HKdJ5Tca64sk632Zs9jcZfsC4Vt3LohWyXB+1QjKGOaBnWADr4lE7r4lXMAl9xcVs721FuZgqEJ8LKOYJO8+tTOC8cuWl7/B3C9gnx231Ns/dcbx0ceW4qi4/fYX2x2FATOwN6yT8LtALKdMyOdZ0IZojUTZWSsdwDNMAg+VUN7gl224dNWUgg7bcjWmw3bG0YFwPbbmCJ/v9Ks7XaDDttctnyMD6NVCEMifypUVIXiNk/Ztn0UfpTWJ4lZKlAEXMCuYDVZG88qmGs/xm61y4lq2AYzO0tHwIz69AI32kgaVlMRbcX4tsxedMkk+2Wra/YJbu7R727ek3BbDMUQNItzzJIBY7CFE6k1Y4HhPcFLmIuwVbMli05ENp4ndTv1Cz+8KCrwHHbrE2yhdwNI3065QQfWoWN4ncclZdiASVUEAACSWO5gb8qsMdjVFxniC7FoBJLEmZkmTUbEWXfx3MtsEEAmS7A6EQIMEdaluM9dcz2qcLiUJi4ctuNlHxeRO8V4LLXXy28zcwqW25c8o/OrHAdxaLXHs97a0QhrjpmJk+EoZB06MI5Vd4c8Lcg4a9fwd4kSXYukTJGcQQPM9NqLLL6VGH7OEKHvXBaToygufRc2nuR6VIxWEN+3lwlm9dS20G4ZcgtrEfZBMnYDUzVnj+z74cC/cFvE2STF1LneW2nXWPFbOm8MN5pHZW3hB3rv3nd+IlAIF0jxJaMHS2CNdYY5ZMCKqs9hsKUdXa4FysMotsGYMIIAI8ObbYk1JsYlr5FprhRXY5me4zF2+IA8gSco19Jqdxjid7EtauXzbtrZdVSwiFfD8RdFBIJJULAOmnqYWCwV0GUVbcmS7/AB/wqJybn+tT7T7K4H2WuX7gS69vD25lnuui6DkqsZLb+XWunY3tNguGYFBgu7cmVtpm1YhirXLkaxIJ1idBpy5rc4S25Rrx6s+T5KJPvm9qi3MAw3t3bY8x3i/NQI/+1U1X8Tx1zE3Gu3nLO5ksfyHQAQAOgFdF7J/6e3MRhe9d7uGxGaLbFTDIFWM6SGGuYTpoJINZbg7PbYNbBYrrNkW2ZfPKFDg+cVp8Fx+3cPjv3CZgh7j7+esTRScfxji3C2W3ilF21MKxkqf/AI7g1ttHIjroa13BO0+G4igQO1q+oJWCBctnmUOzrtMaEbgbCkxfGLKWypuEBh8KNmDD8VsyjD1FYvE2sM7ZkHdsDKsngggyDl1UH90L60sGwxly6uI7jEKouvJS4ghLw++F+yesbHcfaPrIQSCII0IrP3O0GIe0LV8G6yHPZvrAdGGnjGuYESDsddc1T+EcTuXVIe2D3YUZ1EQOjD7Uaa7jz5DVhFEU5FEVFNxXtLiigXFQ+KXHW23dkByIUnYHqanxVXj3lo5DT9T+nypCs5bxGNORXuMrEnM0LAUdMp8Tb6acvWmF4bduO2REnNCMyroqk+LXWenhitB3ZPKp3DrWWWbTlrp6mqhzAYTu7a25mNzAEk76DapMVZYHDW7qMFYi59lmICt+EiJX1J9YqA6MrG26lbi7qfzHUVFIK+VEUuKIoMfxbCX8HdOLwxlTrcWNp3kfaQnXyOvnUzgfEbWLuKFTK2uZDr8SkHL95fbnrWkiq7E8bsOwtuLd1icoz2bVyDtvcFNz5SzVTxzhb4Y5oJtE7/cJ5Hy6VUWjbzS9q2w80APzWDUviN3H52COe6fwhCqqhBB0NoyoOkeEdNqrkXI3d3IFwQCJ8tvXy8qssvoyz2m3OF2rniwlw2rn/Ld9G/cfr5EVWizcZmS+7JljMsDNr5aD31FWI4cX+F1J+6dD/elX7LG2y3mHeKP2RMk6asC4klI5a6xtSpbnzUjCYwWrfd2ZVDqSWksep5VXHENcJCax8Tk+Ee/M1F/2+ozuCG+FFmW5wxMRU6b9lZe33VtgRkuWXCxsM7MoEnyn2rN6t9OPXd62cT/Vddx9u1Pd+N+btv8Awg/nTYd7m0+M8zqx0A157j51NvYXDuMzK1s83tnOnup1X5j0qdwfAW0dluYi3lRC6HIc0tpoDGoGselZ8pzP6zLzzLcu/wB+1VjHRTk3VPCPM/aPuagWrdxgSltsvwyFMT0J2mKtf93hrR/ZIbj6nPdIj+FBp85qVgeLi6wF27DD7whR5KdlHlpWuXbiWc4a4VwR5JcwG3QbH94c9zp5mtMnDW7vLb7sHq1tm9hDgAfwmrDBYEQCIIOxG3sas0sgV0w8qwWJ4HjVbMgtt/8AHkE+oIBPzNe2sY1vTEWblr8RRsv129prb4jG27fxuoPSdflUM8ctnRFYz7CmGq7COjjMjKw6gg1LS3XhtWrjZ/8Ab2w/3h4W+awat8Bw8vsNPyqorDw5bkBrat6qDVovZS3dH7dZ00knOPR5zD0mKvbVhLQECTsSeX+be9Qe0HGXsW81uxdu3DIQKjFfVnSRA8tfzEqyMJ2p7MWsGveDEfFott4JbyBHIdSPestJOsGOoOn6ik8Txd+9ca5fbM53kMIjZQJ0A6Vd9jcNhblzJiXVJ0tlp7tnOy3DIKgxpyJ3840a4fhW7truVu7BgtG7HQIPvHyra8NwxsWgWA7x/EQPs9B7UdoMMtnE4UX3C2ZItjIQqsANCR4VmdD6aRJqTjUYXGzbz9OUe1TViLloilxRFRSIopcUUC4oy05FEUDcVT8a4dinYPbUvbC/ADDEiSSOu+3l51O4txAYe2bhVWgiFJIBJ5aa1E7KdvVnu8bEaBLirAUdHA2G3iHv1qXfoQuHcWPInQwRsVI5Ecq1eHxtvEILd7l8FwfEn9V/CfaKk8d7LWsUO9tMEuEStxIIccs4Gjr571i2a7hbnd30yP8AZO6uOqnn6bipLpYveKvdtOou3G7uPA6sxRhruBqDy110pjGceCprbQjk6z9aocRi+9xtpCSFKd2deTB/1I+VU1jFGyWzCVIgjzEj5gyPnXSekXdvtYuoZNeXi394/QVHsvgc4bLczs05cxGUzPIiRNV/E8Th/wBm+Ht23bIS4ZbkKQYEy0Mx+W1HfPcTwXNCPhQKgHqqgfWoLvFtbuMFOS1aXxawpdunIqPPc/WqLH8KszcuWWuPbAnKiGFY/euNplEzpJ/OqW/nD5dZkR6nb61cKL1poy5bixOa4TMag+ECQZB9qCNh8azSNBG3oKZx73Lly2pZjJABnWZ/SpF8PcuF2tqXJnMjAepYRr12nTepPDrQbE2xuoh52AhSRvU6uS1ju+PNq+4ZhP8AztxraN+ysNkYJMXPCBE6F8rGB6Ve8JL3bbrca7ctl0gXl3YElgJJzAKCT0qH2Sxh7u8YM3MQ+QxoQAizm8iF+laO61y2zM6jKdB4yX33zAAKpGXwxy3qcSySJ+OePMjHcS7ODBu2Jt2zcwzDMyL8Vs9V6rqY6c9Ko1dWXvJNtw58JQQUganYkzm1JG9bDHcdVbbWVRkthFQZhMCIbxayAI1rF2OMW7TBcPh+9vzpcxAzBT1SzsDsczT6CtZ+2rzOplNYvD2InJdRdw2cAGfLutvc1A/2wMtbdmA3kAxHUxXSeG9p+JrlU4g3GMCGt24JPIAKNKs+2DXLmHy3rFgkQTeYKigmNAQwI1MamNt6YfGY5ThMZibOtkhROuUgSfNScpPqKth2oxd62bZCo0+K4oIJH3QNgfMVAxvDcX3eU2nZFJKlSHQAmfiSfmTVxwvheRADvzPU86RJkhnB4MkyxJJ3Jq+wmEincNhavOG4LMw6c60m6XwvhubVtF/OrxYUQogCvWIUQNhVDxvjtu0yW84FxyFXScmY5Q7Cfhkj/BRZDPa3tXbwaZdHvOPCk7A6Z36Lvpz28xiMd2x4hhbjIt1GAgg92sMrAMrR0KkH3rM8Uwt3/c3VvMxuKxzsRJ8j5aR5AV5b4dir3wW7lwKAojWABoB5AVlrFs3briDmO8WSY8Ni1JJ5Dw6mtnwVcV3ebFuru32DateD1KrJb8q5r/4Xi7ZB7i+rDYi24I9CBpVhgMbjw0K94xyIz/NTJrOT9GT9OoYjEG5b7pwptgyARMaRAJOg12pr7KryUZR5AcqyuG7S3bZCYi2ubpDo0dcrCtBw/iVq8JtuD5c/71cWYkxRFORRFFNxRTkUUCooinIoigVa4FZxqXbN0GYDIwOqGSMw+e1YrtF/p5isPL2/21sayoh19U5+o+VXeJ4/cwuIDW8phYZTswJBjy+GZrX8B7cYPFEJn7q7oO7uECSeSPs2x00Om1S7ByDs52nxGCaLZzW58Vtpyk84+43mPcGup8O4rguK2zbIGaJa08ZhH2lPOPvD6VP7Rdi8LjJZk7u7/wAxAAf4hs3vXLOPdjcXgm7wAvbUyt23PhjmQNUPnt51n4q+iO1nBmwWKADsyFQ6MdwJIyk8yCN/Sq/FKrOS4bIzZzkgGHXMYnT48/1qRj+01zFJbTEwzICFuRBIMaOBpuPiHXbnScPeXJ3bRH2Xjbc5Wj7MsSDyk8tuk9M1U2DkzfLzj0qFbu5WidJ0PSrm/hMp1HmCNQR1HUelVOJw2VoI0OxoNl2a4bh8XbYXFY3UOp7xhIPwsNYXp6jzpziXCHdwq3CbgGiXAEukDp9m5+8pisp2f442EvLcAzZZBWYzKdwT8j7V1fg3aDB4yAj5bm+RxlO2pWdDp05VRzbGdnbptvibYzBHCOAHVw5nTIRMjnScPazyFUl8qZNYhnAWNdOm+1abtVft3Lqqly3bvrOZXbKLiyUCh4yt4kBhj6bCs7bs3H7xGVLbkAa+ENLRmM6xtqeVY79OP5t8fj+HsPibltFRHK5Tup1J6yPep+H4xeX4rjOvMMxPyJ2NU6PMHkP+39acDVt1R+JO1y4SbjFgfDJ2WZhddBrt/wB6n8HuJbuAMoymFB+5vqPIkifQdKqmUd4T61KEGiuhW7b4e02IS33lxSMqTBiYZx1IE6etUPbntKuJS1h7Oo0uXY1gj4U9QTJ6eGpuG7TWmw6pdw5u3UXLJy5WC7EsdR8jWYvYgXpc4a2QsEKjXFdQSwkFW5Zfu0rMivwOLuC5bUMfCemoERlzRMRyroK2yYzMxjaSTHpNc+wz4bOXAv2nALTmt3kIGs+IKeXnXSsJaYKMzBm8kK/QsZpE6e27ZHKekf3qZdu4m2ItJbAO7OlwkeySCKk4GzJnkK94rj0tW2uXDCqJPn0A6knT3qkZvjHai7hLZ79VZ2B7vKCsn8StqAN59q53hMS13EFrry92QSTqCRKnoACFAp3iXFzfxBu3j4X8OULOROWWeY38zPWmcRw02HBZgWBDLBIzbMGB5CIaay20HEO7fF4fEXUV0xNsKwaCFu2wLZ05yVQ/x0viPZ6zfb/y4yNs2RQbcfi1AUzGx9qr+K8SzWmtIoa3n75A8krlYhwpJ0mWJBmRrzrX4G8WRcy5PwwIUTyAOum+2u071YlUvDOyduz4rjm43TUJ8vte+nlSuMcRt2/2aojvGiZVgesggCtD2/xLYGyot21z3JC3JkACJIB1DQRvt51yTM+bMy7nfp8tqakl+2v4XxriZGWziFtKNAiW7agekLPvVlgVvLczYxLdxm17wABtOZygZhqNd9aoFS5ZcJcUo8Sp5OOoI3/z0rUcK4ktzwuNYifIx/QUaXq6iRqK9iqnBYg27htt/wAMnwnpP6GrqKypuKKciigVFBFORXhWg55xu5N26fOPyX9Kzd0hjB21O07abc9Zq844IuXf3j/1Gs0z/kR9SaqOk9g+P4u2TZN12RAD3dy2r+Ftijm4rAezAdK6RwbtHhsVK23GcCSjCDEkSAdxIInyrmfArCYm2FfMCqg23Qw9s7Eo3Q6Sp0P1ql4jauWHde+tXLsBky22FwApplII7o5WncxyqXmU103tP2Ew2JV3tqLV6CQVHhY9GXzPMVxV7dyyxVlKkbqdv88xWw7JdrcaHW0jW2tpbllum4ICAszi5BZfBBiCIGgr3ivFMLi7jNb1VpJVljWSCy9QYmd9dhSSwqgwF1ihKQVGr2yZjlmjcfvD36VLWzYugopZLv8Ay3Ihv3GgZvofKoWM4KDrbP8AC36GkXMEwQKwDx1MH2bn71oNW+zbXGcLdtoyn4bhZdNZMgGYMcuflVlgeANZynvEa6G7wd2+YZEiRJETJk+Q86gf7q5oP+IV1AbS4sfPMB7+1WFnj9x3L31AlSLbAQFbfxjcyJE+fygsuL4u9btLc+yxcMx1ymRC5ZAE5mPP4YgVR3Fe9ba+ZZj4ICDRVEZ4A0yrInzq/wCFPavzbtqEuPIdPFkfNoCyrv5MNRzEeJaHieEv24sHNbZJJBBSA0DWQBGpBMwdaz39Ofctsk/fyiliuoGh3/rQ2J6CngDHoPqKIESAskEjbkYJ+tadDFiyTJPt+dSYA11011G1RWwCMZJaeufrOsdNKF4aoIILGORagk4bHC44tlHl/CIJkbGRHxGAdPOpYsvbuMq95bLIq5ly/FoSGIOg321qsvYcwYGsgg81Kzqp5b/QU9w/j7W7ma/LZdSIMkjbyOw35dYiqIOPsZO9idGyjWdCdpjUxXWsEcyIeqqfmBWHThBxXDLuLt6ulw94nTLlMj2aa2fZl8+Hst/7az6qII+Yqc1npeociVzLtjxk37ndof2aH+Zubeg2Hv1rRdtOMd3bKAuMwh2Vc2UExGpAk+u1Y23w1bmFu4hLjBUkZWtgFjpGocwCTHtVpIqOH2g7tcb4U1HqNv6/KpeNu95YnU3UuQBG1twTA6xcB93pCqEtKPvGT6b/AJAVoeH8LtHBNeOZWKB/EVMMNQVgSoJggdDrNRpXX+FNZw6MTmdTnZdDAICug9U1P7hqd2c4jGa0xdshGVtTmVvh9PDl3qpu4m8crs3gXR4O2YFDI5L4j5b7UrgfEEsNct3TGohiCRAEAGPLauf5OuuebeZtb/Hzz31J1cjpPalP9zwq1cE58PcEyNfDmtkEHrKn5Vh24NaxFsPbyW7hiIIFt5gARPgOYhdOe4EzVza7QpYtXcOy/tMS4C5zCIoRVFxyNpKiB0AJqk7IILdy6Ll9Vt5TIzhQTOUOCSIAE6jWK3xbeZeplZ7knVkuxFwN7RrFxCApg22fVWA1Khh4D4XOh1zAQaFc27hWTmU7xE+o5H9Qa1PHcDcuWj3aIblwrbuNAlgJZChBgLOgJkxlrJcUlGVXUrcWTlkQB8Q5lhJnUkzNaRo0ui4sk66fT/vWj4bf7y2CfiGh9RWJ4bf1gbHUeh1rUcDumSp5j6ilSLeKKciistFxRFLy0ZaDnfa3C5b9wcnEj+If1BrFuINdW7YYHMiXVGq+FvQ6g/Oa5vxHCw0jY6j9R+vzqo0/YXGgEBj4UDBz0QKXLewWfapd3DIFbG4ghDcJZiVD5lcmLCoSAXKaA8hqSAtYvB3WTOQYDI6NqPhZSp33ME6c5racCwiY7NduBSltTbsWSTlQAAFz95mbUnef4QArb2Pe1fOLt922HvMH8SAQU3snXwOFJETDLBEgkVV28MljF3LRMrM2zEyrQ6H3Rh862dvCsFay1gvaIy3FhgCFUkFSBo4MQwmD1E1TcV4ewS3eyZlw4yqXXLntgn9lcA0BUEgONCDBA8IoKhuJE3CqZO7AiSYzFQSSDzJMgCI22qbh7+fy0J1IA0BO505VYcY4phrlhEwqIveQXhACoU/CT1kfTzqnnKsmqJLKjch5f5yqFjsEDrM+TeIe3T2rzCBnuACYJrXX+yrhQbdzNoCVOnsDsfpQYEJcT4GZdtnPLURz09alYnil64QboFwrABbMDA5TqD6nU1b4rAtbMXEKnzXf0I3p7hvZ+5iSFs22didYBAVY+NnbwgE6ASSYOmlSjOYnjjO7M9sSec66aanmdvlVjhLS3bYa1Bu+IspdZC6DYCVJPPmKv8R/pzjZ0sz6PbP6iqq72Ox+GcXEsXQV3i2xEc/hkEeVNDrWGu2/DZFu4o5HYLAOYLqWPUj3qLicO1uTowHNeXqu6/3p/BcSxDuGFvMwYK5QQrjdQTJIOnuJp7inGluWWGUi6DlKMreESJIaIJkDQkb1RmsRxEnRPn/Sq9tdTvVpc7u5l/ZhGnVgxgzA1B2A357+1Xt7gPDYUri9CxDEXEOVYY7RMmAPeoJ/+k/FUt37mEuQ1rErAB2zqCMuu+ZSw/hFWOJw17h+MNi2M1p3UIpeAEuFsjSRAIIdCf8A21nesxbfBpcRbN68LmdWV2w6uCwYFYUFTvtAnWuldvsIL1ix3gyuXS20DWLjIpX+cqPnWbcq5scwuYbEYl8UXDZ1V3ZSYyi2U8OX7wYKvrIpeBWOHXQDubeYdD3xA9JEfI1sWwV3DC5bvHPfYBbZmS/eQJjc+K1mI825moHDeDlOFYzOmVmvBU1kkYYyTpp8WYacwaaYxeP0RB+E/kK23E5TBkKBDEIfQkgBfcL7TWQvuVNtwFJU7MJB6AjmJA0q8s8SPEbfd20Ft0ZGOszIcSOgBAHuK0ms0qXLTEsY0nTpBnX7QMRT1qx3y5oTIfDqVRnaPCisd2EbR+dWOP4Bdzhrjy1wkaFBOUSSQogAAfSo/BV1ZIVbaMrF3VWCMZh100id/QnyDPLn+0xMGYJ5xE/QCrDg14LcR2RWOaCp+3B2jmdQY6incYFGYqtvSSSv2gCqzM6zmmfXTWplixbNtHNtxcDFiQQVCgT4ZiHET7daDoV22LakgfYZlE/DllxzhR4ckATt0rL4i4MRbe5oSUkE5eUMMuumg9Z0NaHhOKz4dLt9vssZYDVWL5Z010ZTI661W8exSE3chEKht6bEjKdI3iYg6ab1Rl+HHRfl8iRWp4I03B02+hP9KzGBWI9PzJrU8ASbi+QY/p+tBp4opeWvKypyKIpzLRloG2tqwKuJVgVYeRrnPH+Dm05RtUOqt+XvXSstReI4Jb1sowHkTyqxK49esEArG/TT5Vb9mxctgNafWZZWBIPKdPhMCJn51I4pw023KsPY/wCa1WNbHmPf+tUbUdrFSBdtlW/DcRgfScp+lQ8f21UgratksdPGfzUb/OskyA/Ezfzf0pJuKo8IAqBaIF1MT5beg8qj4m/OlNXcTNWnZzgdzFPoItg+JjsPLzPlQXHYrhZdu8YeFfqa38U3gsGlpAiCAPr5mpGWoGXthhDAEHkRI+VSsBi3sLktquX7u0aRpTeWjLUs1U9e0Fwb2/l/2p1e0fW3HvVXlois+C6pcDgrVsXLNqyGkr4n8TMNQQzRH2iNANCRVhi+DYbwZ8PbZ1yzluMDoTIYgAEifepQFeZaviKTinZPBXxKBrBGhVEzKZJ8fjhtOgIGlWPDexeCFtUFtbpG5Z2Qk/uqdPSSKl5a9QkGRoaYKm5h8Hg8RnXA3e8txldTcKAxHhlo0FScEt/GX0vYi33Vi02dFOaXYbEyBMTOgIEbk6VZLirg+0fma8e+7bmp401W9o+E28YwNy441JCrpl+EAlucBZCgbsZMaU+9lO7FpVy2lTIq9FO89SZJJ86eijLWpMRyfiuDNtntndTp7HQ/kaq+D484TErcg5G0cfhbQ+6tr/COtdA7Y8OOl5Rpor/of0+VYXG4QMI9weh/zStI6ZirVu9agw1tkLqQTl1BZSI3Gm419NRWO4dZuWrYvshUOgYeKRqYGZTyiDsQCQN6rOznaW5gybTgtZ+7PiSTJNsmRB6HQydjrXTcKLeJthldbtpoMSuh31HIg7idCKo5/iMI9y7cayjm26kv96CVJ0XQDOJ9hVh2QVjcuq+GORVZXL6wdCoAK6sdZUdQfXc4Th4tqe7AEgbxy9efnXt7CqYJCs20lQQBIMCRO6qekgUGf4ti0VHsARcNsNuqqiAwsAfZmYETtNZ7ittbVsLEM/wrEeHTxRuCYAEk7NtNT+L4w4PE2s+a8RbuAFiqtkuMrRcKiDlYMcxAzBtqoMRiXvXDdc+JtvIeQ5AbfKgXhk/oPb/DWy7MWdC59NqyuGtFiEUeXp/nSuiYDCi3bVOg19aUOxRTmWvKypyKIpUURQJivCKXFEUFXxTB96uV7Iccj3gBHoY0rE8Q7K4kEm1bYr0LJI9wdfkK6VFEUHILnZzHf+nf2Kf1pg9nMaTBsXB5mI+k12aK9ihjmvCOyCAhsQbjfgS2QPdiZPsBW4wly1bQIiFFGwCEAfKrKKIoIy4hD9r5gj86WHU8x86dy15lHQUCZHUUUrIOgoyDpQeRRFBtDpXhsj/DQexRFJ7gdW+dHc/ib50CooivO6P3jR3bfe+lB7FEV4Eb730r3Keo+VARRFGVvKvCH/DQJvWQ6lWEqwgjyNc547wdsO5BBa2x8LfofxfnXRGe4PsA+jVGxTh1KXLLMp3ESPpQcpxOFDjbMPqPQ/571Ewwu2HzWbrI3qVJ9eR961XFeDd2S1osV+62jL5AnRh8j61SNigDlaJ6MIPyNVEyz2xxyiC1pvNgn6EUXu1GNueE3FXytpr/ADcvnUMOn3U+le96o5gDy0oELZJMtJY6kTJJ6s1S7QAMSJP+aDpXmBs3LrZbVtnPkNB6nl71t+B9mhbh7pDPyUbL/U0HnZzhBUC7cEH7IP8A1H9PnWiilRRFRSYopUUUC6KKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKApm9g7bfFbRvVFP5iiigiHgWEO+Gsf/AMk/pTQ7N4L/ANLY/kA/KiiglWuHWUgJbCjyLD9alJbA2/M17RQe0UUUBRRRQf/Z",
        description: "It consists of 12V battery and provide better performance and Narrow wheels and tires and No front or rear suspension."
    }, {

        name: "ROYAL ENFIELS ELECTRIC",
        varients: [
            "0",
            "6",
            "7",
            "8"
        ],
        prices: [
            {
                "6": 180,
                "7": 250,
                "8": 360
            }
        ],
        category: "SPORTS BIKE",
        description: "This motorcycle optimized for speed, acceleration, braking, and cornering on paved roads, typically at the expense of comfort and fuel.",
        image:  "https://www.indiacarnews.com/wp-content/uploads/2020/12/Royal-Enfield-Electric-Bike.jpg?fbclid=IwAR3HnU8Qhlth1A6LnvhHVKyIj6HMco7Xh0QK6ptieGHuIvGwt6YxilmPTwc"
    }, {

        name: "SUZUKI HAYABUSA",
        varients: [
            "0",
            "6",
            "7",
            "8"
        ],
        prices: [
            {
                "6": 200,
                "7": 300,
                "8": 420
            }
        ],
        category: "SPORTS BIKE",
        image:  "https://wallpapercave.com/wp/wp3883151.jpg",
        description: "Very lightweight frame, wheels and No front or rear suspension."
    }, {

        name: "PULSAR 200NS",
        varients: [
            "0",
            "6",
            "7",
            "8"
        ],
        prices: [
            {
                "6": 150,
                "7": 220,
                "8": 300
            }
        ],
        category: "SPORTS BIKE",
        image: "https://ic1.maxabout.us/autos/tw_india//2/2021/1/2021-bajaj-pulsar-rs200.jpg",
        description: "The bike has an engine capacity over a couple of hundred cc or has a multi-cylinder engine."
    }, {

        name: "TVS APACHE RR 310",
        varients: [
            "0",
            "6",
            "7",
            "8"
        ],
        prices: [
            {
                "6": 250,
                "7": 380,
                "8":450
            }
        ],
        category: "SPORTS BIKE",
        image:  "https://images.financialexpress.com/2020/02/2020-bs6-tvs-apache-rr310-review-racing-red-1.jpg",
        description: "Power and Torque  and Carrying capacity is high."
    }]
export default pizzas;